import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BridgeServiceService {
  constructor() {}

  private subject = new Subject<any>();

  setNumber(num: number) {
    this.subject.next(num);
  }

  getNumber(): Observable<any> {
    return this.subject.asObservable();
  }
}
