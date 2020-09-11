import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  nom : string;
  age : number;
  email: string;
  hobby : hobby;
  constructor() { 
    this.nom = 'Alex';
    this.age = 22;
    this.email = 'tambymampioninaheriharson@gmail.com';
    this.hobby = {
      hobbyUn: 'Manger',
      hobbyDeux: 'Dormir',
      hobbyTrois: 'Apprendre'
    }
  }

  ngOnInit(): void {
  }
}
  interface hobby{
    hobbyUn: string;
    hobbyDeux: string;
    hobbyTrois: string;
}
