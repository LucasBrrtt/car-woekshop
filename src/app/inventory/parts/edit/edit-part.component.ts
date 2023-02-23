import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormControlName, FormGroup } from '@angular/forms';

import { fromEvent, merge, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { DisplayMessage, GenericValidator, ValidationMessages } from '../../../utils/generic-form-validation';
import { PartService } from '../part.service';

@Component({
  selector: 'app-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.css']
})
export class EditPartComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[] | any;

  public editPartForm: FormGroup | any;

  displayMessage: DisplayMessage = {};
  genericValidator: GenericValidator;
  validationMessages: ValidationMessages;

  constructor(private fb: FormBuilder, private partService: PartService, private router: Router, private route: ActivatedRoute) {
    this.validationMessages = {
      name: {
        required: 'Name Required',
        minlength: 'At least 2 characters'
      },
      qtd: {
        required: 'Quantity Required'
      },
      price: {
        required: 'Price Required'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.editPartForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(2)]],
      qtd: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['']
    });

    this.fillForm();
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.editPartForm)
    });
  }

  fillForm() {
    this.partService.itemById(this.route.snapshot.params['id']).subscribe((res) => {
      this.editPartForm.patchValue({
        id: res.id,
        name: res.name,
        qtd: res.qtd,
        price: res.price,
        description: res.description
      });
    });
  }

  updatePart() {
    this.partService.updateItem(this.route.snapshot.params['id'], this.editPartForm.value)
      .subscribe(data => {
        this.router.navigate(['/inventory']);
      });
  }

}