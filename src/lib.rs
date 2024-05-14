use solana_program:: {
    account_info:: AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey
};

// declare and export the program's entrypoint

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    account: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    msg!("Hello, world!");

    Ok(())
}