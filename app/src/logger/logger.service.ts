import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log<T = any>(payload: T): void {
    console.log(payload);
  }

  error<T = any>(payload: T): void {
    console.error(payload);
  }

  info<T = any>(payload: T): void {
    // eslint-disable-next-line no-console
    console.info(payload);
  }
}

// Вне angular
/*
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { ConfigService } from '@app/core/config';

export interface LoggerData {
  context: Record<string, any>;
  level: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private readonly url: string;

  constructor(
    private readonly configService: ConfigService,
    @Inject(PLATFORM_ID) private readonly platformId: any
  ) {
    this.url = `${this.configService.getConfig().apiUrl}/logger`;
  }

  log(data: Partial<LoggerData> = {}): void {
    if (isPlatformBrowser(this.platformId) && window['XMLHttpRequest'] !== null) {
      data.context = { ...data.context };

      if (!data.level) {
        data.level = 'warning';
      }
      if (!data.message) {
        data.message = 'JS unhandled error';
      }
      if (data.context?.error && !data.context?.stack) {
        data.context.stack = data.context.error?.stack?.toString();
      }

      const xhr = new XMLHttpRequest();
      xhr.open('POST', this.url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send(JSON.stringify(data));
    }
  }

}
*/