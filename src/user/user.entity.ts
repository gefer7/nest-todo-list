import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Address } from "src/address/address.entity";

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email: string;

    @OneToMany(type => Address, address => address.user, { cascade: true, eager: true })
    addresses: Array<Address>;
}