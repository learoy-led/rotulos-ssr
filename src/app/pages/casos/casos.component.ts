import { Component } from '@angular/core';
import { cases } from '../../data/data';
//import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casos.component.html',
  styleUrl: './casos.component.css'
})
export class CasosComponent {

  public cases = cases
public selectedCase: string | null = null
public isMobile: boolean = false;
//public screenSub: Subscription = new Subscription();;

//constructor(private screenService: ScreenService) {}

  


// public ngOnInit() {
//   this.screenSub = this.screenService.getMobileSize().subscribe(
//     (isMobile) => (this.isMobile = isMobile));
//     console.log('movil en oninit', this.isMobile, 'selected', this.selectedCase)    
//   }

public selectCase(i:number) {
  //console.log('movil en seleccion', this.isMobile, 'selected', this.selectedCase)
  //if (!this.isMobile) {this.selectedCase = cases[i]}
  this.selectedCase = cases[i]
  return
}

public closeImageZoom () {
  this.selectedCase = null
}

// public ngOnDestroy() {
//   this.screenSub.unsubscribe();
// }

}
