import Card from './Card';
import Button from './Button';
import Backdrop from './Backdrop';
import Autocomplete from './Autocomplete';
import { Theme } from '@mui/material/';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Card(theme),
    Button(theme),
    Backdrop(theme),
    Autocomplete(theme)
  );
}
