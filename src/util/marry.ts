export interface Person {
    first: string;
    last: string;
    address: {
        city: string;
        country: string;
    }
}

const p: Person = {
    first: 'Pawel',
    last: 'Sawicki',
    address: {
        city: 'Berlin',
        country: 'Germany'
    }
};

function marry(person: Person, last: string, city: string): Person {
    // person.last = last;
    // person.address.city = city;
    // return person;
    return {
        ...person,
        last,
        address: {
            ...person.address,
            city,
        }
    };
}

const pMarried = marry(p, 'Musterfrau', 'Hannover');

function hasChanged(pPrev: Person, pCurr: Person): boolean {
    // n is the number of nodes (and leafs), the runtime complexiy is O(n)
    // ... is this possible in O(1)
    return pPrev !== pCurr; 
    // || pPrev.first !== pCurr.first 
    // || pPrev.last !== pCurr.last
    // || pPrev.address !== pCurr.address
    // || pPrev.address.city !== pCurr.address.city
    // || pPrev.address.country !== pCurr.address.country
}