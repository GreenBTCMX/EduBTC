import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Wallets } from './components/wallets/wallets';
import { Nodes } from './components/nodes/nodes';
import { Mining } from './components/mining/mining';
import { Security } from './components/security/security'; 

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'wallets', component: Wallets },
  { path: 'nodos', component: Nodes },
  { path: 'mineria', component: Mining },
  { path: 'seguridad', component: Security },
  { path: '**', redirectTo: '' }
];