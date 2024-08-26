import React from 'react';
import styled from 'styled-components';
import pluginId from '../../pluginId';
import ProdButton from '../../components/Button';

const StyledDiv = styled.div`
  padding: 3rem;

  hr {
    margin: 50px 0;
  }
`;

const HomePage = () => {
	return (
		<StyledDiv>
			<h1>Release to Stg</h1>
			<ProdButton
				apiUrl="/api/upload-corp-strapi"
				nextApiUrl="/api/duplicate-file"
				buttonText="AGW Campaign Release"
				borderColor="#00146e"
				color="#00146e"
			/>
			<ProdButton
				apiUrl="/api/upload-corp-strapi"
				nextApiUrl="/api/duplicate-file"
				buttonText="AGW Help Release"
				borderColor="#00146e"
				color="#00146e"
			/>
			<ProdButton
				apiUrl="/api/upload-corp-strapi"
				nextApiUrl="/api/duplicate-file"
				buttonText="AGW News Release"
				borderColor="#00146e"
				color="#00146e"
			/>
			<ProdButton
				apiUrl="/api/upload-corp-strapi"
				nextApiUrl="/api/duplicate-file"
				buttonText="AGW Guide Release"
				borderColor="#00146e"
				color="#00146e"
			/>
			<hr />
			<h1>Release to Prod</h1>
			<ProdButton
				apiUrl="/api/upload-corp-strapi"
				nextApiUrl="/api/duplicate-file"
				buttonText="AGW Campaign Release"
				borderColor="#ff5100"
				color="#ff5100"
			/>
			<ProdButton
				apiUrl="/api/upload-corp-strapi"
				nextApiUrl="/api/duplicate-file"
				buttonText="AGW Help Release"
				borderColor="#ff5100"
				color="#ff5100"
			/>
			<ProdButton
				apiUrl="/api/upload-corp-strapi"
				nextApiUrl="/api/duplicate-file"
				buttonText="AGW News Release"
				borderColor="#ff5100"
				color="#ff5100"
			/>
			<ProdButton
				apiUrl="/api/upload-corp-strapi"
				nextApiUrl="/api/duplicate-file"
				buttonText="AGW Guide Release"
				borderColor="#ff5100"
				color="#ff5100"
			/>
		</StyledDiv>
	);
};

export default HomePage;
