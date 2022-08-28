import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Collapse, List, Typography, useTheme } from '@mui/material/';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

type CollapseMenProps = {
  item: { title: string; icon: React.ReactNode };
  subItems: Array<{ title: string; path: string }> | undefined;
  index: number;
};

export const CollapseMenu = ({ item, index, subItems }: CollapseMenProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem key={index}>
        <ListItemButton
          sx={{
            justifyContent: 'space-between',
            borderRadius: '8px',
            ':hover': { backgroundColor: theme.palette.grey[200] },
          }}
          selected={open}
          onClick={handleClick}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            primary={<Typography variant="subtitle2">{item.title}</Typography>}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              left: '42px',
              top: 0,
              height: '100%',
              width: '1px',
              opacity: 1,
              background: theme.palette.grey[400],
            },
          }}
        >
          {subItems &&
            subItems.map((item) => (
              <Box paddingLeft={8} paddingBottom={1}>
                <ListItemButton
                  sx={{
                    borderRadius: '8px',
                    cursor: 'pointer',
                    padding: '0 .5rem',
                    ':hover': {
                      backgroundColor: theme.palette.grey[200],
                    },
                    width: '80%',
                  }}
                  onClick={() => navigate(item.path)}
                >
                  <Box display="inline-flex" gap={2} alignItems="center">
                    <Typography variant="h6"> • </Typography>
                    <Typography variant="body2">{item.title}</Typography>
                  </Box>
                </ListItemButton>
              </Box>
            ))}
        </List>
      </Collapse>
    </>
  );
};
