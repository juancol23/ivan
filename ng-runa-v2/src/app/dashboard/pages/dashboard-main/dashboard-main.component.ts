import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Company } from '../../interfaces/company';
import { CompanyService } from '../../services/companies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css',
})
export class DashboardMainComponent implements OnInit {
  public companies: Company[] = [];
  public codesCompany: Company[] = [];

  constructor(private companyService: CompanyService) {}

  getCategoriesAll(): void {
    this.companyService.getCompanies().subscribe((companies) => {
      const listCategories = new Set<string>();
      this.companies = companies.filter((company) => {
        if (
          company.vmo !== '' &&
          company.vmo &&
          !listCategories.has(company.vmo)
        ) {
          listCategories.add(company.vmo);
          return true;
        }
        return false;
      });
    });
  }

  onSelectChange(e: Event) {
    const item = e.target as HTMLSelectElement;

    this.companyService.getCompanies().subscribe((companies) => {
      // Este bloque se ejecuta cuando se obtiene respuesta de la api
      if (item.value) {
        this.codesCompany = companies.filter((company) => {
          return company.requerimiento && company.vmo === item.value;
        });
      } else {
        this.codesCompany = companies.filter((company) => {
          return company.requerimiento;
        });
      }
    });
  }

  ngOnInit(): void {
    this.getCategoriesAll();
  }
}
