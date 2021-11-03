import { Injectable } from '@angular/core';

import { AbstractSyncStorage } from './abstract-sync.storage';
import { MemoryStorage } from './memory.storage';
import { storageAvailable } from './storage.util';

@Injectable({
  providedIn: 'root',
})
export class SessionSyncStorage extends AbstractSyncStorage {
  constructor() {
    super(storageAvailable('sessionStorage') ? window.localStorage : new MemoryStorage());
  }
}