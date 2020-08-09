import { css } from 'styled-components';
import { variables } from '@styles/variables.styles';

export const textGlowing = (color: string = variables.colorSecondary) => css`
    text-shadow:
     0 0 3px #fff,
     0 0 10px ${color},
     0 0 0px ${color},
     0 0 0px ${color},
     0 0 0px ${color},
     0 0 0px ${color},
     0 0 0px ${color};
`;
