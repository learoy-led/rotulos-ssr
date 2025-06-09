import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { LoadingService } from './core/services/loading.service';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rótulos Learoy';
  

//   public isLoading: boolean = true

//   constructor(private loadingService: LoadingService) {}

   //ngOnInit() {  
//   this.listenLoading() 
 //}

// public listenLoading() {
//   this.loadingService.getLoadingStatus().subscribe((isLoading) => {
//     this.isLoading = isLoading
//   });
// }

}
