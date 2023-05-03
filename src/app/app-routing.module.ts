import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./pages/quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'nuestros-trabajos',
    loadChildren: () => import('./pages/nuestros-trabajos/nuestros-trabajos.module').then( m => m.NuestrosTrabajosPageModule)
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./pages/preguntas-frecuentes/preguntas-frecuentes.module').then( m => m.PreguntasFrecuentesPageModule)
  },  
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'cotizacion',
    loadChildren: () => import('./pages/cotizacion/cotizacion.module').then( m => m.CotizacionPageModule)
  },
  {
    path: 'detalle-cotizacion',
    loadChildren: () => import('./pages/detalle-cotizacion/detalle-cotizacion.module').then( m => m.DetalleCotizacionPageModule)
  },
  {
    path: 'modulo-catalogo',
    loadChildren: () => import('./pages/modulo-catalogo/modulo-catalogo.module').then( m => m.ModuloCatalogoPageModule)
  },
  {
    path: 'modulo-mano-obra',
    loadChildren: () => import('./pages/modulo-mano-obra/modulo-mano-obra.module').then( m => m.ModuloManoObraPageModule)
  },
  {
    path: 'modulo-material',
    loadChildren: () => import('./pages/modulo-material/modulo-material.module').then( m => m.ModuloMaterialPageModule)
  },
  {
    path: 'modulo-cotizacion',
    loadChildren: () => import('./pages/modulo-cotizacion/modulo-cotizacion.module').then( m => m.ModuloCotizacionPageModule)
  },
  {
    path: 'modulo-transporte',
    loadChildren: () => import('./pages/modulo-transporte/modulo-transporte.module').then( m => m.ModuloTransportePageModule)
  },
  {
    path: 'modulo-credencial',
    loadChildren: () => import('./pages/modulo-credencial/modulo-credencial.module').then( m => m.ModuloCredencialPageModule)
  },
  {
    path: 'modulo-reporte',
    loadChildren: () => import('./pages/modulo-reporte/modulo-reporte.module').then( m => m.ModuloReportePageModule)
  },
  {
    path: 'modulo-proveedor',
    loadChildren: () => import('./pages/modulo-proveedor/modulo-proveedor.module').then( m => m.ModuloProveedorPageModule)
  },
  {
    path: 'modulo-empresa',
    loadChildren: () => import('./pages/modulo-empresa/modulo-empresa.module').then( m => m.ModuloEmpresaPageModule)
  },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
