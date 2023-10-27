class Key {
   private signature = Math.random();

   getSignature(): number {
      return this.signature;
   }
}

class Person {
   constructor(private key: Key) {
      this.key = key;
   }
   getKey(): Key {
      return this.key;
   }
}
abstract class House {
   protected door: boolean = false;
   protected tenants: Person[];
   constructor(public key: Key) {}
   abstract comeIn(person: Person): void;
   abstract openDoor(key: Key): void;
}

class MyHouse extends House {
   comeIn(person: Person): void {
      {
         if (this.door) {
            this.tenants.push(person);
         }
      }
   }
   openDoor(key: Key): void {
      if (key === this.key) {
         this.door = true;
      } else {
         this.door === false;
      }
   }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
