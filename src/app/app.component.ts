import { Component } from '@angular/core';

function remove(item: string, list: string[]) {
  if (list.indexOf(item) !== -1) {
    list.splice(list.indexOf(item), 1);
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arrets = [
    'arret 1',
    'arret 2',
    'arret 3',
    'arret 4',
   
  ];
tranches=[
  'BELV1',
  'BELV2',
  'BELV3',
  'BELV4'

];
 
  semaine1Tranche1 = [
      'arret 5'
  ];

  semaine2Tranche1 = [
 
  ];
  semaine3Tranche1 = [
   
  ];
  semaine4Tranche1 = [
     
  ];
  semaine5Tranche1 = [
     
  ];

  semaine6Tranche1 = [
 
  ];
  semaine7Tranche1 = [
   
  ];
  semaine8Tranche1 = [
     
  ];
  currentBox?: string;

  move(box: string, toList: string[],indexSemaine:number ): void {
    remove(box, this.arrets);
    remove(box, this.semaine1Tranche1);
    remove(box, this.semaine2Tranche1);
    remove(box, this.semaine3Tranche1);
    remove(box, this.semaine4Tranche1);
    remove(box, this.semaine5Tranche1);
    remove(box, this.semaine6Tranche1);
    remove(box, this.semaine7Tranche1);
    remove(box, this.semaine8Tranche1);
    console.log("je suis dans la semaine "+indexSemaine)
    toList.push(box);
  }
}
