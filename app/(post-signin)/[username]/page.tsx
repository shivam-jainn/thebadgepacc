"use client";
import React, { useState, useEffect } from 'react';
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import { Divider } from '@nextui-org/divider';
import { useSession } from 'next-auth/react';
import { Skeleton } from '@nextui-org/skeleton';

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

  const { data: session, status } = useSession();
  console.log(session);
    

  return (
    <>
      {status === 'loading' ? (
        <Skeleton>
          {userData && (
            <Card className='flex flex-row justify-between max-w-sm gap-12 p-4 m-auto'>
              <Avatar src={userData.image} size='lg' radius='sm' isBordered />
              <div className='flex flex-col'>
                <h2>{userData.name}</h2>
                <p>{`@${userData.username}`}</p>
              </div>
            </Card>
          )}
        </Skeleton>
      ) : (
        <>
          <div>
            {userData && (
              <Card className='flex flex-row justify-between max-w-sm gap-12 p-4 m-auto'>
                <Avatar src={userData.image} size='lg' radius='sm' isBordered />
                <div className='flex flex-col'>
                  <h2>{userData.name}</h2>
                  <p>{`@${userData.username}`}</p>
                </div>
              </Card>
            )}
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
