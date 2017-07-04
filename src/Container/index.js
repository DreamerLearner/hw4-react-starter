import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';

const Container = props =>
  <s.Container>
    {props.children}
  </s.Container>;

Container.propTypes = {
  children: PropTypes.array.isRequired,
};

const Sidebar = props =>
  <s.Sidebar>
    {props.children}
  </s.Sidebar>;

Sidebar.propTypes = {
  children: PropTypes.array.isRequired,
};

const PlayerInfoBox = props =>
  <s.PlayerInfoBox>
    {props.children}
  </s.PlayerInfoBox>;

PlayerInfoBox.propTypes = {
  children: PropTypes.object.isRequired,
};

const SettingPgBox = props =>
  <s.SettingPgBox>
    {props.children}
  </s.SettingPgBox>;

SettingPgBox.propTypes = {
  children: PropTypes.array.isRequired,
};

export default {
  Container,
  Sidebar,
  PlayerInfoBox,
  SettingPgBox,
};
