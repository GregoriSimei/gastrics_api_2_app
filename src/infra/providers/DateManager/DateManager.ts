import { injectable } from 'tsyringe';
import { IDateManager } from './IDateManager';

@injectable()
export class DateManager implements IDateManager {
  getWeekDay(date: Date): string {
    return date
      .toLocaleString('en-us', {
        weekday: 'long',
        timeZone: 'America/Sao_Paulo',
      })
      .toLowerCase();
  }

  getMonth(date: Date): string {
    return date
      .toLocaleString('en-us', {
        month: 'long',
        timeZone: 'America/Sao_Paulo',
      })
      .toLowerCase();
  }

  getDay(date: Date): string {
    return date
      .toLocaleString('en-us', {
        day: 'numeric',
        timeZone: 'America/Sao_Paulo',
      })
      .toLowerCase();
  }

  getYear(date: Date): string {
    return date
      .toLocaleString('en-us', {
        year: 'numeric',
        timeZone: 'America/Sao_Paulo',
      })
      .toLowerCase();
  }

  getHour(date: Date): string {
    const hourDescription = date
      .toLocaleString('en-us', {
        hour: 'numeric',
        timeZone: 'America/Sao_Paulo',
      })
      .toLowerCase();

    let sum = 0;
    if (hourDescription.includes('pm')) {
      sum = 12;
    }

    const hourWithoutNumber = hourDescription
      .replace('pm', '')
      .replace('am', '')
      .replace(' ', '');

    const hourNumber = parseInt(hourWithoutNumber, 10);
    const finalStringHour = (hourNumber + sum).toString();

    return finalStringHour;
  }

  getOnlyDateInfo(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  getSecoundsDiference(date1: Date, date2: Date): number {
    return Math.abs(date1.getTime() - date2.getTime()) / 1000;
  }
}
