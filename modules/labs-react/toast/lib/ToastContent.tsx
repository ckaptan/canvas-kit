/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';
import {Popup, space, type} from '@workday/canvas-kit-react';

export interface ToastContentProps {
  children: React.ReactNode;
}

const ToastContentContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: space.s,
  ...type.levels.subtext.large,
});

export const ToastContent = createComponent('div')({
  displayName: 'Toast.Content',
  Component: ({children}: ToastContentProps, ref, Element) => {
    return (
      <Popup.Body>
        <ToastContentContainer>{children}</ToastContentContainer>
      </Popup.Body>
    );
  },
});
