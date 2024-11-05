import Gen1 from './Gen1';
import Gen2 from './Gen2';
import Gen3 from './Gen3';
import Gen4 from './Gen4';

const Generations = ({ gen1, gen2, gen3, gen4 }) => (
  <div className="generations">
    <Gen1 {...gen1} />
    <Gen2 {...gen2} />
    <Gen3 {...gen3} />
    <Gen4 {...gen4} />
  </div>
);