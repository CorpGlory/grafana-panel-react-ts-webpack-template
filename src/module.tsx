import './css/panel.dark.scss';
import './css/panel.light.scss';

import { PanelProps, PanelPlugin } from '@grafana/ui';
import { loadPluginCss } from 'grafana/app/plugins/sdk';

import React, { PureComponent } from 'react';

// TODO: make styles local for panel
loadPluginCss({
  dark: 'plugins/grafana-panel-template-react-ts-webpack/css/panel.dark.css',
  light: 'plugins/grafana-panel-template-react-ts-webpack/css/panel.light.css',
});

export class ReactPanelTemplate extends PureComponent<PanelProps> {
  _panelPath: string;

  render() {
    return (
      <div className="hello">
        Hello from <b>my panel</b>
      </div>
    );
  }

  get panelPath() {
    if (this._panelPath === undefined) {
      // TODO: get plugin id from window
      // Change grafana-panel-template-react-ts-webpack with your panel id
      this._panelPath = `public/plugins/grafana-panel-template-react-ts-webpack/`;
    }
    return this._panelPath;
  }
}

export const plugin = new PanelPlugin(ReactPanelTemplate);
