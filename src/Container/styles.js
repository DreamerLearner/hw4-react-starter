import styled from 'styled-components';

const styles = {};

styles.Container = styled.div`
	display: flex;
	flex-direction:row;
`;

styles.Sidebar = styled.div`
	width: 200px;
	padding: 0 10px;
	color: #3172ce;
	text-decoration:none;
`;

styles.PlayerInfoBox = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	border-bottom: 2px dashed #154a96;
`;

styles.SettingPgBox = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	border-bottom: 2px dashed #154a96;
`;

export default styles;
