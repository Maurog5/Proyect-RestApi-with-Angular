import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryServiceComponent } from '../service/country-service/country-service.component';
import { IPais } from '../../app/models/pais.model';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent {
  countryForm: FormGroup;
  editingCountry: IPais | null = null;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryServiceComponent,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.countryForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      capital: ['', [Validators.required, Validators.maxLength(10)]],
      population: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const countryId = this.activatedRoute.snapshot.paramMap.get('id');
    if (countryId) {
      this.editingCountry = this.countryService.getCountryById(countryId);
      if (this.editingCountry) {
        this.preFillForm(this.editingCountry);
      }
    }
  }

  preFillForm(country: IPais) {
    this.countryForm.patchValue({
      name: country.name.common,
      capital: country.capital,
      population: country.population
    });
  }
  cancelEdit(): void {
    this.editingCountry = null;
    this.countryForm.reset();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  updateCountry(): void {
    if (!this.editingCountry) {
      return;
    }

    this.editingCountry.name.common = this.countryForm.value.name;
    this.editingCountry.capital = this.countryForm.value.capital;
    this.editingCountry.population = this.countryForm.value.population;

    this.countryService.updateCountry(this.editingCountry);

    this.editingCountry = null;
    this.countryForm.reset();
    alert('Country updated successfully');
    this.router.navigate(['/favorites']);
  }
}
