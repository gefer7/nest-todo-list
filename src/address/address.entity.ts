import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "src/user/user.entity";

@Entity({ name: "addresses" })
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'public_place', type: 'varchar', length: 150 })
    publicPlace: string;

    @Column({ name: 'address_number', type: 'varchar', length: 20 })
    addressNumber: string;

    @Column({ name: 'district', type: 'varchar', length: 50 })
    district: string;

    @ManyToOne(type => User, user => user.addresses)
    @JoinColumn({ name: "user_id" })
    user: User;
}