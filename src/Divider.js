import React, { forwardRef } from 'react';

export const Divider = forwardRef(({ navId }, ref) => (
  <div id={navId} className="vertical-divider" ref={ref} />
));