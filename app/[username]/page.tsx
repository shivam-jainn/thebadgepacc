"use client";
import React, { useState, useEffect } from 'react';
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import useSWR from 'swr';
import Image from 'next/image';
interface BadgeImage {
  pic: string;
}

const fetcher = async (url: RequestInfo): Promise<any> => {
  const res = await fetch(url);
  return res.json();
};


const BadgesPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userData, setUserData] = useState<any>({});
  const [tokens, setTokens] = useState<any[]>([]);
  const [badgeImages, setBadgeImages] = useState<BadgeImage[]>([]);
  const [selectedBadgeIndex, setSelectedBadgeIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        if (response.ok) {
          const data = await response.json();
          setUserData(data.userData);
          setTokens(data.tokens);
          setBadgeImages(data.badgeImages);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleModalOpen = (index: number) => {
    setSelectedBadgeIndex(index);
    onOpen();
  };

  return (
    <>
      {userData && (
        <Card className='max-w-sm p-3 m-auto'>
          <Avatar src={userData.image} />
          <h2>{userData.name}</h2>
          <p>{`@${userData.username}`}</p>
        </Card>
      )}


<div className='w-full p-4 m-4'>
  
<hr />
</div>

      <div className='max-w-lg grid-cols-3'>

        {tokens.map((token, index) => (
          <Card
            isFooterBlurred
            radius="lg"
            className="max-w-[250px] p-4 border-none"
            key={index}
          >          {badgeImages[index] ? (

            <img
              alt="Woman listing to music"
              className="object-cover m-auto mb-4 rounded-lg"
              height={200}
              src={badgeImages[index].pic}
              width={200}
              onClick={() => handleModalOpen(index)}

            />

          ) : (
            <p>Loading...</p>
          )}
            <Button onClick={() => handleModalOpen(index)}>View More</Button>
          </Card>
        ))}

      </div>

      {/* Modal for badge details */}
      <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
          <ModalHeader>Badge Details</ModalHeader>
          <ModalBody>
            {selectedBadgeIndex !== null && (
              <p>Details for badge {selectedBadgeIndex} will be shown here.</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={onClose}>
              Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};



export default BadgesPage;
