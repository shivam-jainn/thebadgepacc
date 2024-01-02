"use client";
import React, { useState, useEffect } from 'react';
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import { Divider } from '@nextui-org/divider';
import { Skeleton } from '@nextui-org/skeleton';
import { useParams } from 'next/navigation'

interface BadgeImage {
  pic: string;
}

const BadgesPage = ({searchParams}) => {
  
  const params = useParams()
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tokens, setTokens] = useState<any[]>([]);
  const [badgeImages, setBadgeImages] = useState<BadgeImage[]>([]);
  const [selectedBadgeIndex, setSelectedBadgeIndex] = useState<number | null>(null);
  const [status,setStatus] = useState("loading");
  const [userData,setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/${params.username}`);
        if (response.ok) {
          const data = await response.json();
          setTokens(data.tokens);
          setBadgeImages(data.badgeImages);
          setUserData(data.user);
          
          setStatus("loaded");
          console.log(userData);

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
      {status === 'loading' ? (
          <Skeleton>
            <Card className='flex flex-row justify-between max-w-sm gap-12 p-4 m-auto'>
              <Avatar src="/FIRSTBADGE.png" size='lg' radius='sm' isBordered />
              <div className='flex flex-col'>
                <h2>Some username</h2>
                <p>Something ig</p>
              </div>
            </Card>
          </Skeleton>
      ) : (
      <>
        <div>
          <Card className='flex flex-row justify-between max-w-sm gap-12 p-4 m-auto'>
            <Avatar src={userData.image} size='lg' radius='sm' isBordered />
            <div className='flex flex-col'>
              <h2>{userData.name}</h2>
              <p>{`@${userData.username}`}</p>
            </div>
          </Card>
        </div>

        <Divider className='max-w-lg m-auto my-4 bg-gray-500' />

        <div className='max-w-lg grid-cols-3 sm:grid-cols-1'>
          {tokens.map((token, index) => (
            <Card
              isFooterBlurred
              radius="lg"
              className="max-w-[200px] p-4 m-auto border-none"
              key={index}
            >
              {badgeImages[index] ? (
                <img
                  alt="Badge"
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
      )}
    </>
  );
};

export default BadgesPage;

export const dynamic = "force-static";