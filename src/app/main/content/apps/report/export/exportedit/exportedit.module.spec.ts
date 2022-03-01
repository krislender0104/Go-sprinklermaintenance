import { ExporteditModule } from './exportedit.module';

describe('ExporteditModule', () => {
  let exporteditModule: ExporteditModule;

  beforeEach(() => {
    exporteditModule = new ExporteditModule();
  });

  it('should create an instance', () => {
    expect(exporteditModule).toBeTruthy();
  });
});
