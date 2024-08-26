import React from 'react';
import styled from 'styled-components';

interface ProdButtonProps {
	apiUrl: string;
	nextApiUrl: string;
	buttonText: string;
	borderColor: string;
	color: string;
}

const ProdButton: React.FC<ProdButtonProps> = ({ apiUrl, nextApiUrl, buttonText, borderColor, color }) => {
	const handleProd = async () => {
		try {
			const confirmRelease = window.confirm('リリースしますか？');
			if (!confirmRelease) return;

			// 最初のリクエストを送信
			const response1 = await fetch(apiUrl, { method: 'GET' });
			const data1 = await response1.json();
			if (!response1.ok) {
				throw new Error(data1.message || 'An error occurred during the first request');
			}

			// 最初のリクエストが成功した場合、次のリクエストを送信
			const response2 = await fetch(nextApiUrl, { method: 'GET' });
			const data2 = await response2.json();
			if (response2.ok) {
				alert(data2.message);
			} else {
				throw new Error(data2.message || 'An error occurred during the second request');
			}
		} catch (error) {
			alert(`Error: ${error}`);
		}
	};

	return <Button onClick={handleProd} borderColor={borderColor} color={color}>{buttonText}</Button>;
};

const Button = styled.button<{ borderColor: string, color: string }>`
  display: inline-block;
  background: #fff;
  color: ${(props) => props.color};
  font-size: 1em;
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 3px;
  display: block;
  width: 220px;
`;

export default ProdButton;
