import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockPersonService implements InMemoryDbService {
  createDb() {
    const persons = [
      { id: 1, firstName: 'John', lastName: 'Doe', emailAddress: 'john.doe@example.com' },
      { id: 2, firstName: 'Jane', lastName: 'Doe', emailAddress: 'jane.doe@example.com' },
      { id: 3, firstName: 'Bob', lastName: 'Smith', emailAddress: 'bob.smith@example.com' },
      { id: 4, firstName: 'Alice', lastName: 'Johnson', emailAddress: 'alice.johnson@example.com' }
    ];
    return { persons };
  }
}