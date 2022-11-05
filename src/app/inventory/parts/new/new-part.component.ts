import { fromEvent, map, merge, Observable } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormControlName, FormGroup } from '@angular/forms';
import { PartService } from '../part.service';
import { Part } from '../part.model';
import { HttpClient } from '@angular/common/http';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../../../utils/generic-form-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-part',
  templateUrl: './new-part.component.html',
  styleUrls: ['./new-part.component.css']
})
export class NewPartComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[] | any;

  public newPartForm: FormGroup | any;
  public inventory: Part[] = [];

  displayMessage: DisplayMessage = {};
  genericValidator: GenericValidator;
  validationMessages: ValidationMessages;

  constructor(private fb: FormBuilder, private partService: PartService, private http: HttpClient, private router: Router) {
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

    this.genericValidator = new GenericValidator(this.validationMessages)
  }

  ngOnInit(): void {
    this.newPartForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      qtd: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['']
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.newPartForm)
    });
  }

  register(value: any): void {
    this.partService.addItem(value)
      .subscribe(data => {
        this.router.navigate(['/inventory'])
      });
  }

}
