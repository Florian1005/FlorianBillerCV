import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  scroll:boolean=false;
  admin = false;

  constructor(
  private router: Router, ) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrolling, true)
  }
  onSubmit(route: string) {
    this.router.navigate([route]);
  }


  @HostListener('scroll', ['$event'])  onScroll($event: Event): void {

  };


  scrolling=(s:any )=>{
    this.scroll = s.explicitOriginalTarget.scrollingElement.scrollTop > 100;
  }

}
