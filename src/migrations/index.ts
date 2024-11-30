import * as migration_20241118_153620 from './20241118_153620';
import * as migration_20241119_085707 from './20241119_085707';
import * as migration_20241119_085949 from './20241119_085949';
import * as migration_20241120_184140 from './20241120_184140';

export const migrations = [
  {
    up: migration_20241118_153620.up,
    down: migration_20241118_153620.down,
    name: '20241118_153620',
  },
  {
    up: migration_20241119_085707.up,
    down: migration_20241119_085707.down,
    name: '20241119_085707',
  },
  {
    up: migration_20241119_085949.up,
    down: migration_20241119_085949.down,
    name: '20241119_085949',
  },
  {
    up: migration_20241120_184140.up,
    down: migration_20241120_184140.down,
    name: '20241120_184140'
  },
];
