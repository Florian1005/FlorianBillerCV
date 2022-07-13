import {Component} from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("inOutPaneAnimationL", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-100%)" }), //apply default styles before animation starts
        animate(
          "750ms ease-in-out",
          style({ opacity: 1, transform: "translateX(0)" })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: "translateX(0)" }), //apply default styles before animation starts
        animate(
          "400ms ease-in-out",
          style({ opacity: 0, transform: "translateX(100%)" })
        )
      ])
    ]),
    trigger("inOutPaneAnimationR", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(100%)" }), //apply default styles before animation starts
        animate(
          "750ms ease-in-out",
          style({ opacity: 1, transform: "translateX(0)" })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: "translateX(0)" }), //apply default styles before animation starts
        animate(
          "400ms ease-in-out",
          style({ opacity: 0, transform: "translateX(100%)" })
        )
      ])
    ])
  ]
})
export class AppComponent {

  title = 'FlorianBillerCV';
  display: boolean | undefined;
  scroll: boolean | undefined;
  scrollValue : number  = 0;
  positionY: string = "";
  clicked: boolean = false;
  ProjectList : any ;
  num: any = 0;
  page: number = 1;
  randNum: number | 0 | undefined;

  ngOnInit(): void {

    this.getRandNum()


   this.ProjectList = [
      {
        id : "1",
        titre: "Projet UHA4.0 [Logitud]",
        titreBis: "DBGeoAddresses",
        content: "Developper un referentiel d'adresses \n" +
          "quiseramulti-source et dont on\n" +
          "connait la validite des donnees",
        contentBis: "NDLZKzdddz",
        date: "11/2018 1/2018",
        logo: ['assets/mongo.png','assets/node.png', ]
      },
     {
       id : "2",
       titre: "Projet UHA 4.0 [Université de Grenoble]",
       titreBis: "EdCampus",
       content: "Ameliorer et debugger un LDAP pour l'université de Grenoble ",
       contentBis: "d",
       date: "1/2019 3/2019",
       logo: ['assets/AngularJS.png','assets/Bootstrap.png', ]
     },
     {
       id : "3",
       titre: "Stage [Artcane]",
       titreBis: "Artcane",
       content: "Developper un site internet vitrine/blog\n" +
         "Ameliorer et gerer du SEO ",
       contentBis: "e",
       date: "3/2019 8/2019",
       logo: ['assets/PHP-logo.png','assets/JavaScript.png','assets/Bootstrap.png','assets/mysql.png' ]
     },
     {
       id : "4",
       titre: "Projet UHA 4.0[Master Histoire]",
       titreBis: "Alsace Expos",
       content: "Creer une application mobile sur mesure\n" +
         "pour des etudiants en histoire afin de leur expliquer les bases du SQL",
       contentBis: "ezhr",
       date: "10/2019 11/2019 ",
       logo: ['assets/angular.png','assets/JavaScript.png','assets/Bootstrap.png','assets/mysql.png' ]

     },
     {
       id : "5",
       titre: "Projet UHA4.0 [UHA4.0]",
       titreBis: "Badgeuse",
       content: "Creer et ameliorer une application badgeuse\n" +
         "numerique web pour les étudiants",
       contentBis: "ezhr",
       date: "11/2019 1/2020 ",
       logo: ['assets/angular.png','assets/node.png','assets/Bootstrap.png','assets/mysql.png','assets/python.png' ]

     },
     {
       id : "6",
       titre: "Stage [Actimage]",
       titreBis: "Actinote",
       content: "Creer une app moblie permettant d'editer des workflows insitu(sequence d'activites a realiser pour assister la collecte\n" +
      " d'informations ou la realisation de taches).",
       contentBis: "ezhr",
       date: "2/2020 8/2020",
       logo: [ 'assets/node.png', 'assets/React.png'  ]

     },
     {
       id : "7",
       titre: "Projet Perso",
       titreBis: "Evolution",
       content: "Simulation d'evolution d'une espece dans un millieu perturbé par un predateur" ,
       contentBis: "ezhr",
       date: "11/2019 1/2020 ",
       logo: [ 'assets/angular.png' ]
     },
     {
       id : "8",
       titre: "Projet UHA4.0 [ElanGPS]",
       titreBis: "ELAN GPS de l'orientation",
       content: "capable d’informer les etudiants et futurs\n" +
       " etudiants des differents parcoure d'apprentissage que propose l'Univereite de Haute Alsace(UHA).",
       contentBis: "ezhr",
       date: "11/2019 1/2020 ",
       logo: ['assets/angular.png','assets/nestjs.png','assets/Typescript.png','assets/Bootstrap.png','assets/mysql.png','assets/Docker.png', 'assets/Jenkins.png']

     },
     {
       id : "9",
       titre: "Projet UHA4.0 [FNESIGame]",
       titreBis: "FNESIGame",
       content: "Creer un jeu moblie de type quizz pour aider les etudiants infirmier a reviser leurs cours,",
       contentBis: "ezhr",
       date: "1/2020 3/2020",
       logo: [ 'assets/Java.png',  'assets/React.png']
     },
     {
       id : "10",
       titre: "Projet Perso CV",
       titreBis: "CV en ligne",
       content: "Ce site" ,
       contentBis: "ezhr",
       date: "11/2019 1/2020 ",
       logo: [ 'assets/angular.png' ]
     },
     {
       id : "11",
       titre: "Développeur informatique Université Haute Alsace",
       titreBis: "Développement informatique",
       content: "Continuer le GPS de l'orientation disponible ici https://www.goelan.uha.fr/#/\n" +
         "Devloppement de site Wordpress \n" +
         "Devloppement d'un serious Game",
       contentBis: "ezhr",
       date: "6/2020 8/2022",
       logo: ['assets/angular.png','assets/nestjs.png','assets/Unity.png',,'assets/WordPress.png']
     }
    ]

    window.addEventListener('scroll', this.scrolling, true)
    window.addEventListener('mousemove', this.mouseevent , true)
    window.addEventListener('mouseup', this.click , true)
    window.addEventListener('mousedown', this.click , true)
  }


  scrolling=(s:any )=>{
    const element : any = document.getElementById('cursor')
    const element2 : any = document.getElementById('cursorTrail')
    const element3 : any = document.getElementById('cursorTraill')
    this.scrollValue = s.explicitOriginalTarget.scrollingElement.scrollTop
    element.style.top  = this.positionY+ this.scrollValue + 'px'
    element2.style.top  = this.positionY+ this.scrollValue + 'px'
    element3.style.top  = this.positionY+ this.scrollValue + 'px'
  }

  mouseevent=(m:any)=>{
    const element : any = document.getElementById('cursor')
    const element2 : any = document.getElementById('cursorTrail')
    const element3 : any = document.getElementById('cursorTraill')
    this.positionY = m.y
    element.style.top = this.positionY + this.scrollValue + 'px'
    element.style.left = m.x + 'px'

    element2.style.top = this.positionY + this.scrollValue + 'px'
    element2.style.left = m.x + 'px'
    element3.style.top = this.positionY + this.scrollValue + 'px'
    element3.style.left = m.x + 'px'

    if (m.clientY+this.scrollValue  > 800 ){
      element.style.border = '1px solid #0092ca'
      element2.style.border = '1px solid #0092ca'
      element3.style.border = '1px solid #0092ca'

    }
    else {
      element.style.border = '1px solid #393E46'
        element2.style.border = '1px solid #393E46'
      element3.style.border = '1px solid #393E46'
    }

  }

  click=(c:any)=>{
    const element : any = document.getElementById('cursor')
    const element2 : any = document.getElementById('cursorTrail')
    const element3 : any = document.getElementById('cursorTraill')
    if (c.buttons === 1) {
      element.style.width = '10px'
      element.style.height = '10px'

      element2.style.width = '10px'
      element2.style.height = '10px'

      element3.style.width = '10px'
      element3.style.height = '10px'
    }
    else {
      element.style.width = ''
      element.style.height = ''

      element2.style.width = ''
      element2.style.height = ''

      element3.style.width = ''
      element3.style.height = ''
    }
  }

  CDbug() {
    console.log("Dbug")
  }


  selectBox(i : any) {
    this.num = i

  }


  netxPage(){

    if (this.page >= this.ProjectList.length ){
      this.page = this.ProjectList.length
    }
    else {


      this.page = this.page + 3
      console.log("oefiznzefhioo ouodu")
    }
  }

  afterPage() {

    this.page = this.page - 3
    if (this.page < 0 ){
      this.page = 1
    }


  }

  scrollEl(num: number) {
    window.scrollTo(0, num);
  }


  getRandNum(){
    return {left :Math.floor(Math.random() * 100)+ 'px', top :Math.floor(Math.random() * 400)+ 'px'} ;
  }
}
