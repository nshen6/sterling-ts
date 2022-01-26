import { SideBarButton } from '@/sterling-ui';
import { FaFilm } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { useSterlingDispatch, useSterlingSelector } from '../../state/hooks';
import { selectMainView, selectTableDrawer } from '../../state/selectors';
import { tableDrawerViewChanged } from '../../state/ui/uiSlice';

const TableViewButtons = () => {
  const dispatch = useSterlingDispatch();
  const view = useSterlingSelector(selectMainView);
  const drawer = useSterlingSelector(selectTableDrawer);
  return (
    <>
      <SideBarButton
        text='Time'
        rightIcon={<FaFilm />}
        isActive={view === 'TableView' && drawer === 'state'}
        onClick={() => dispatch(tableDrawerViewChanged('state'))}
      />
      <SideBarButton
        text='Settings'
        rightIcon={<IoSettingsOutline />}
        isActive={view === 'TableView' && drawer === 'settings'}
        onClick={() => dispatch(tableDrawerViewChanged('settings'))}
      />
    </>
  );
};

export { TableViewButtons };
