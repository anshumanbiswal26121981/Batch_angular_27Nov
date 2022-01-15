import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AppConfigInterface } from './app-config.model';

@Injectable()
export class AppConfig {

    static settings: AppConfigInterface;

    private _config: Object | undefined;
    private _env: Object | undefined;

    constructor(private http: HttpClient) { }

    load() {
        // const jsonFile = `assets/config/config.${environment}.json`;
        // return new Promise<void>((resolve, reject) => {
        //     this.http.get(jsonFile).toPromise().then((response) => {
        //         AppConfig.settings = <AppConfigInterface>(response);
        //         resolve();
        //     }).catch((response: any) => {
        //         reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
        //     });
        // });
    }

    // getEnv(key: any) {
    //     if(this._env) {
    //         return this._env[key];
    //     }
        
    // }

    // get(key: any) {
    //     if (this._config) {
    //         return this._config[key];
    //     }
    // }
}