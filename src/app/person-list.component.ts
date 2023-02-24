import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons);
  }

  delete(person: Person): void {
    this.persons = this.persons.filter(p => p !== person);
    this.personService.deletePerson(person).subscribe();
  }
}