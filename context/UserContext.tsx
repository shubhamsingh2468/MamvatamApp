import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserStage = 'Conceive' | 'Pregnant' | 'Mother' | '';

interface UserContextType {
    stage: UserStage;
    setStage: (stage: UserStage) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [stage, setStage] = useState<UserStage>('');

    return (
        <UserContext.Provider value={{ stage, setStage }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
