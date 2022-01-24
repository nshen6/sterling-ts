import { Button, DatumParsed } from '@/sterling-connection';
import { PaneTitle } from '@/sterling-ui';
import { ViewHeaderButton } from '../common/ViewHeaderButton';
import { ScriptViewHeaderButtons } from './ScriptViewHeaderButtons';

interface ScriptViewHeaderProps {
  datum: DatumParsed<any>;
  onExecute: () => void;
}

const ScriptViewHeader = (props: ScriptViewHeaderProps) => {
  const { datum, onExecute } = props;
  const { id, parsed, buttons } = datum;
  const command = parsed.command;
  return (
    <div className='w-full flex item-center space-x-2 px-2'>
      <PaneTitle className='text-gray-400'>ID: {id}</PaneTitle>
      <PaneTitle>{command}</PaneTitle>
      <div className='grow' />
      <ScriptViewHeaderButtons onExecute={onExecute} />
      {buttons &&
        buttons.map((button: Button, index: number) => {
          return <ViewHeaderButton key={index} datumId={id} button={button} />;
        })}
    </div>
  );
};

export { ScriptViewHeader };