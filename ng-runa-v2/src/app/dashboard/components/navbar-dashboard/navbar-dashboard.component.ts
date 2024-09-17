import {Component, OnInit} from '@angular/core';
import { Company } from '../../interfaces/company';
import { CompanyService } from '../../services/companies.service';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { UserService } from '../../services/user.service';
import {User} from "../../interfaces/user";
@Component({
  selector: 'navbar-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './navbar-dashboard.component.html',
  styleUrl: './navbar-dashboard.component.css',
})
export class NavbarDashboardComponent implements OnInit{
  public companies: Company[] = [];
  public codesCompany: Company[] = [];
  public showCreateForm= false;
  public requerimientoForm: FormGroup;
  public users: User[]=[];

  public seniorities: string[] = [
    'JR', 'SS', 'S', 'N/A',
  ];
  public tecnologias: string[] = [
    '.NET', 'ANDROID', 'APLICACIONES', 'ATU', 'BI', 'BIG DATA', 'BIG DATA/ IOT', 'BPEL', 'BPMN', 'BSCR', 'CCNA', 'CLOUD', 'EAI', 'ERP ORACLE', 'EXCEL', 'IONIC', 'IOT', 'ISO', 'ISTQB', 'ITIL', 'JAVA', 'JAVA WEB', 'JBOSS', 'LINUX', 'MICROSERVICIOS', 'MÓVILES', 'MS ACCESS', 'MS PROJECT/PMP', 'N/A', 'OAC', 'ORACLE', 'ORACLE/JAVA', 'P. BUILDER', 'PHP', 'PLSQL', 'PMO', 'PMP', 'PMP/SCRUM', 'POSTVENTA', 'POWER BUILDER', 'POWER POINT', 'PROCESOS', 'RED', 'REMEDY', 'RETAIL', 'RFP/FINANZAS', 'RPA', 'RPA/API', 'RTC', 'SAP', 'SAP/SISCONT', 'SCRUM/KANBAM', 'SEGURIDAD', 'SGA', 'SHELL', 'SOA', 'SOA/PMP', 'SOPORTE', 'SQL'
  ];
  public clientes: string[] = [
    'G_HITSS', 'CLARO_U', 'CLARO_P', 'MAPFRE', 'MIBANCO', 'NUEVO', 'CLARO_CHILE', 'REMICSA', 'MEDIFARMA', 'SANTANDER', 'SELECCIONABLE'
  ];
  public obsCancelados: string[] = [
    'CAMBIO DE PERFIL', 'CANDIDATO DESISTE DEL PROCESO', 'DEMORA EN RESPUESTA CVs', 'NO SE TIENE OC', 'PROCESO EN STAND BY', 'MOVIMIENTO DE PERSONAL', 'REGISTRO EQUIVOCADO', 'A SOLICITUD DEL GERENTE'
  ];


  constructor(
    private companyService: CompanyService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.requerimientoForm = this.fb.group({
      status: [{ value: 'Creado', disabled: true }],
      vmo: ['', Validators.required],
      nombrePuesto: ['', Validators.required],
      solicitante: ['', Validators.required],
      requerimiento: ['', Validators.required],
      fechaSolicitud: ['', Validators.required],
      seniority: ['', Validators.required],
      cantidad: ['', Validators.required],
      tecnologia: ['', Validators.required],
      cliente: ['', Validators.required],
      prioridad: ['', Validators.required],
      motivo: ['', Validators.required],
      obsCancelados: ['', Validators.required],
      asignacion: ['', Validators.required],
      adjuntoBase: [null, Validators.required],
    });
  }

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

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error al cargar los usuarios:', error);
      }
    );
  }

  ngOnInit(): void {
    this.getCategoriesAll();
    this.loadUsers();

    const modalElement = document.getElementById('exampleModal');
    if(modalElement){
      modalElement.addEventListener('hidden.bs.modal', () =>
        this.onModalClose()
      );
    }
  }

  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
  }

  crearRequerimiento(): void {
    if(this.requerimientoForm.valid){
      const newData: Company = this.requerimientoForm.getRawValue();
      this.companyService.createRequerimiento(newData).subscribe((data) => {
        if (data) {
          console.log('Requerimiento guardado correctamente:', data);
        } else {
          console.error('Error al guardar el requerimiento.');
        }
      });
    }

  }

  onModalClose(): void {
    this.requerimientoForm.reset({
      status: { value: 'Creado', disabled: true },
      vmo: '',
      nombrePuesto: '',
      solicitante: '',
      requerimiento: '',
      fechaSolicitud: '',
      seniority: '',
      cantidad: '',
      tecnologia: '',
      cliente: '',
      prioridad: '',
      motivo: '',
      obsCancelados: '',
      asignacion: '',
      adjuntoBase: null,
    });
    this.showCreateForm = false;
  }
}
