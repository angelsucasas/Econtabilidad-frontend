import { Component, OnInit } from '@angular/core';
import { TimelineLite, Back, Power1, TweenMax } from 'gsap'
declare var ScrollMagic: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu = new TimelineMax({paused:true, reversed:true});
  	test =  new TimelineMax({paused:true, reversed:true})	
  	test3 =  new TimelineMax({paused:true, reversed:true})	
  	myTween: any;


  	controller = new ScrollMagic.Controller();
  	controller2 = new ScrollMagic.Controller();     
  	hu:any;

  	constructor(){
  		this.test.play();
  		this.test3.play();	
  	}

  	ngOnInit(){
  	   this.createMenuAnim()
  	   this.ImageAnimation()
  	   this.scrollTest()
  	   this.turnAtScroll();	  	   	  	 
  	}

  	createMenuAnim(){
  	    this.menu.to("#example", .5, {rotation:'30', ease:"Expo.easeInOut"},0)
  	    this.menu.to("#example2", .5, {rotation:'-30', ease:"Expo.easeInOut"},0)	    
  	}  

  	async ImageAnimation(){			
  		this.test.from("#test",{opacity:0, duration:4.5, x:300} )
  		
  	}
  	  
  	menuClick() {
  	    this.menu.reversed() ? this.menu.play() : this.menu.reverse();		    	   
  	}

  	scrollTest(){
  		let action = gsap.timeline().fromTo('#menuEle1',{opacity:0, x:-600},{opacity:0, x:0})

  		new ScrollMagic.Scene({
  		    triggerElement: '#menuEle1',
  		    duration: "90%",
  		    triggerHook: 0.98,
  		    offset: 50 
  		})
  	    .on("enter", function (e) {		    	
  	    	action.play();		    	
  	    })		
  	    .on("leave", function (e) {		    		
  	    	action.reverse();		    			    
  	    })   
  	    .addTo(this.controller);
  	}


  	turnAtScroll(){	
  		let action = gsap.timeline().to("#animate",{rotationY: 90});

  		new ScrollMagic.Scene({
  		    triggerElement: '#trigger',
  		    duration: "90%",
  		    triggerHook: 0.98,
  		    offset: 50 
  		})
  	    .on("enter", function (e) {		    	
  			action.reverse()					    			 
  	    })		
  	    .on("leave", function (e) {		    		
  	    	action.play() 			    			    
  	    })   
  	    .addTo(this.controller);
        
  	}

}
