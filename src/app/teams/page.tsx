"use client";

import { useEffect, useState } from "react";
import { TUser } from "../type/user";
import { CardTeams } from "../components/cardteams";
import Wrapper from "../components/wrapper";
import Image from "next/image";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/?results=20");
      const data = await res.json();
      setUsers(data.results);
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="relative w-full h-64 mb-8">
        <Image
          src="/assets/1.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold underline underline-offset-4 decoration-4">
            Our Teams
          </h1>
        </div>
      </div>  
      <Wrapper>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2">
          {users.map((user: TUser) => {
            // console.log(user);
            return (
              <CardTeams
                key={user?.sys?.id}
                name={`${user?.name?.first} ${user?.name?.last}`}
                image={user?.picture?.medium}
                email={user?.email}
                country={user?.location?.country}
              />
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default UserList;
