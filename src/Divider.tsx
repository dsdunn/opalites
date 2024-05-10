import React, { forwardRef } from 'react';

export const Divider = forwardRef<HTMLDivElement, { navId: string}>(({ navId }, ref) => (
  <div id={navId} className="vertical-divider" ref={ref} />
));