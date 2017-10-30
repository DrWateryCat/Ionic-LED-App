import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  redValue: number = 0;
  greenValue: number = 0;
  blueValue: number = 0;
  modeSelect: number = 0;
  ipAddress: string = "";

  constructor(private http: HTTP, private toast: Toast) {
  }

  redChange(newValue) {
    this.makeRequest('red', newValue);
  }

  greenChange(newValue) {
    this.makeRequest('green', newValue);
  }

  blueChange(newValue) {
    this.makeRequest('blue', newValue);
  }

  modeChange(newValue) {
    this.makeRequest('mode', newValue);
  }

  private getAPI(endpoint: string): string {
    return this.ipAddress + '/api/' + endpoint;
  }

  private makeRequest(endpoint: string, input: number) {
    this.http.post(this.getAPI(endpoint), {value: input}, {}).then(data => {
      
    }).catch(error => {
      try {
        this.toast.show("Couldn't make the request, error: " + error.error, '1500', 'bottom').subscribe(toast => {
          console.log(toast);
        });
      } catch(e) {
        alert("Error: " + error.error);
      }
    });
  }
}
