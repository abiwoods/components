import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {
      name: 'Abi',
      age: 27,
      job: 'Unemployed Scrounger',
      employed: false
    },
    {
      name: 'Jos',
      age: 29,
      job: 'Annoying Know-It-All',
      employed: true
    },
    {
      name: 'Jack',
      age: 15,
      job: 'Bestest Good Boy',
      employed: false
    }
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'employed', label: 'Has a Job'},
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
