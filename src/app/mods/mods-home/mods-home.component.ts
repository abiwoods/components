import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  showModal: boolean = false;

  accordionItems = [
    { title: 'Why is the sky blue?', content: 'Because science.' },
    { title: 'What does an orange taste like?', content: 'An orange tastes not unlike a satsuma or clementine, but does not taste like tuna.' },
    { title: 'What colour is that cat?', content: 'The cat is orange (but does not taste like an orange!)'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
