import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useAppContext } from '../../utils/context/AppContext';

function ToggleSwitcher() {
  const { unit, setUnit } = useAppContext();
  const [enabled, setEnabled] = useState(unit === 'imperial');

  const toggleUnit = () => {
    setUnit(enabled ? 'metric' : 'imperial');
    setEnabled(!enabled);
  };

  return (
    <div className="flex items-center">
      <span className="text-white pr-2">
        {unit === 'metric' ? 'Celsius' : 'Fahrenheit'}
      </span>
      <Switch
        checked={enabled}
        onChange={toggleUnit}
        className={`${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Toggle unit</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
}

export default ToggleSwitcher;
