import React from 'react';

import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react';

import {ToastContent} from './ToastContent';
import {ToastClose} from './ToastClose';
import {ToastIcon} from './ToastIcon';
import {ToastMessage} from './ToastMessage';
import {ToastAction} from './ToastAction';
import {ToastModel, useToastModel} from './useToastModel';

export interface ToastProps extends ExtractProps<typeof Popup.Card, never> {
  children: React.ReactNode;
}

const toastWidth = 360;

export const ToastModelContext = React.createContext<ToastModel>({} as any);

export const Toast = createComponent('div')({
  displayName: 'Toast',
  Component: ({children, ...elemProps}: ToastProps, ref, Element) => {
    const value = useToastModel();
    const {
      state: {closeButtonExist, actionButtonExist},
    } = value;
    const isInteractive = closeButtonExist || actionButtonExist;

    return (
      <ToastModelContext.Provider value={value}>
        <Popup.Card
          ref={ref}
          as={Element}
          width={toastWidth}
          padding="s"
          role={isInteractive ? 'dialog' : 'status'}
          aria-live={isInteractive ? 'off' : 'polite'}
          aria-atomic={!isInteractive}
          {...elemProps}
        >
          {children}
        </Popup.Card>
      </ToastModelContext.Provider>
    );
  },
  subComponents: {
    Content: ToastContent,
    Close: ToastClose,
    Icon: ToastIcon,
    Message: ToastMessage,
    Action: ToastAction,
  },
});