import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Container, Divider } from 'semantic-ui-react';
import './estandar.css';
export default class MenuLateral extends Component {
	state = { activeItem: 'Principal' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu borderless fixed="left" vertical>
				<Container textAlign="center">
					<Image fluid centered="true" src="/logoStudyAnt.png" />
					<h2>Study-Ant</h2>
					<Divider hidden />
				</Container>
				<Link to="/Principal">
					<Menu.Item as="a" active={activeItem === 'Principal'}>
						<i aria-hidden="true" class="home icon" />Inicio
					</Menu.Item>
				</Link>
				<Link to="/Perfil">
					<Menu.Item as="a" active={activeItem === 'Perfil'}>
						<i aria-hidden="true" class="user circle icon" />Perfil
					</Menu.Item>
				</Link>
				<Menu.Item as="a" active={activeItem === 'Buscar'}>
					<i aria-hidden="true" class="group icon" />Buscar grupos
				</Menu.Item>
				<Menu.Item as="a" active={activeItem === 'Grupos'}>
					<i aria-hidden="true" class="address book icon" />Grupos
				</Menu.Item>
				<Menu.Item as="a" active={activeItem === 'Biblioteca'}>
					<i aria-hidden="true" class="book icon" />Biblioteca Personal
				</Menu.Item>
				<Menu.Item as="a">
					<i aria-hidden="true" class="address card icon" />Amigos
				</Menu.Item>
			</Menu>
		);
	}
}
